from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import TaskSerializer
from .models import Task


class TaskViewSet(viewsets.ModelViewSet):
    """
        This viewset automatically provides `list`, `create`, `retrieve`,
        `update` and `destroy` actions.

        Additionally we also provide an extra `votes` action.
        """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def pre_save(self, obj):
        assert isinstance(self.request.user, object)
        obj.owner = self.request.user

