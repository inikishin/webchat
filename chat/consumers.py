import json
import logging
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync

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
        message = text_data_json['message']
        print(text_data)

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )

    def chat_message(self, event):
        message = event['message']
        print('123', event)

        self.send(text_data=json.dumps({
            'message': message
        }))