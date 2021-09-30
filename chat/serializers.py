from rest_framework import serializers
from .models import Account, Group, Message


class AccountSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    email = serializers.ReadOnlyField(source='user.email')

    class Meta:
        model = Account
        fields = ['id', 'user', 'username', 'email', 'avatar', 'last_login']


class GroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = ['id', 'name', 'users', 'private', 'last_activity']