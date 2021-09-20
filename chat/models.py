from django.db import models
from django.contrib.auth.models import User


class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username


class Group(models.Model):
    name = models.TextField(unique=True)
    users = models.ManyToManyField(Account)
    private = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Message(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    posted = models.DateTimeField(auto_now=True)
    text = models.TextField()

    def __str__(self):
        return f'{self.user}({self.group}): {self.text}'
