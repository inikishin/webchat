from django.shortcuts import render
from rest_framework import permissions, viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Account, Group
from .serializers import AccountSerializer, GroupSerializer


class AccountViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    filterset_fields = ['id']

    @action(methods=['get', 'post'], detail=False, url_path='login')
    def login(self, request):
        print('login')
        print(request.query_params['username'])
        account = Account.objects.get(user__username=request.query_params['username'])
        print(account)
        account.logged_in()
        return Response(status=status.HTTP_200_OK)

    @action(methods=['post'], detail=False, url_path='logout')
    def logout(self, request):
        print('logout')
        return Response(status=status.HTTP_200_OK)

    @action(methods=['post'], detail=False, url_path='register')
    def register(self, request):
        print('register')
        return Response(status=status.HTTP_200_OK)

    @action(methods=['get', 'post'], detail=False, url_path='usersettings')
    def user_settings(self, request):
        print('user_settings')
        return Response(status=status.HTTP_200_OK)


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    filterset_fields = ['id', 'name']