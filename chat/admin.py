from django.contrib import admin

from .models import Account, Group, Message

admin.site.register(Account)
admin.site.register(Group)
admin.site.register(Message)
