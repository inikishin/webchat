import json
import logging
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync

from .models import Message, Account, Group

logger = logging.getLogger(__name__)

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        chat_name = self.scope['url_route']['kwargs']['room_name']
        logger.warning(f'connection with chat "{chat_name}" established')
        self.room_name = chat_name
        self.room_group_name = chat_name

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        groupHistory = Message.objects.filter(group_id=chat_name)
        print(chat_name)
        print(groupHistory)
        if len(groupHistory) > 0:
            for msg in groupHistory:
                async_to_sync(self.channel_layer.group_send)(
                    self.room_group_name,
                    {
                        'type': 'chat_message',
                        'user': msg.user.id,
                        'group': msg.group.id,
                        'message': msg.text,
                        'posted': msg.posted.isoformat()
                    }
                )

        self.accept()

    def disconnect(self, code):
        logger.warning('connection closed')
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data=None, bytes_data=None):
        logger.warning(f'message recived: {text_data}')
        text_data_json = json.loads(text_data)

        print('recive', text_data)
        message = text_data_json['message']
        user = Account.objects.get(id=text_data_json['user'])
        group = Group.objects.get(id=text_data_json['group'])
        msg = Message(user=user, group=group, text=message)
        msg.save()

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'user': msg.user.id,
                'group': msg.group.id,
                'message': msg.text,
                'posted': msg.posted.isoformat()
            }
        )

    def chat_message(self, event):
        print('chat_message:', event)

        self.send(text_data=json.dumps(event))