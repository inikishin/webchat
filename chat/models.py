import datetime

from django.db import models
from django.contrib.auth.models import User


class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    last_login = models.DateTimeField(blank=True, null=True)
    avatar = models.ImageField(upload_to='static/chat/avatars/')

    def __str__(self):
        return self.user.username

    def logged_in(self):
        self.last_login = datetime.datetime.now()
        self.save()


class Group(models.Model):
    name = models.TextField(unique=True)
    users = models.ManyToManyField(Account)
    private = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def last_activity(self):
        last_activity_date = Message.objects.filter(group=self.id).aggregate(posted=models.Max('posted'))
        if not last_activity_date['posted'] is None:
            last_message = Message.objects.get(group=self.id, posted=last_activity_date['posted'])
            return {'user': last_message.user.id, 'message': last_message.text, 'posted': last_message.posted}
        else:
            return {}


class Message(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    posted = models.DateTimeField(auto_now=True)
    text = models.TextField()

    def __str__(self):
        return f'{self.user}({self.group}): {self.text}'

