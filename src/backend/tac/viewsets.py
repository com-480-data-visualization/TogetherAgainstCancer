from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Cancer

from .serializers import CancerSerializer

class CancerViewSet(viewsets.ModelViewSet):
    queryset = Cancer.objects.all()
    serializer_class = CancerSerializer
    permission_classes = [AllowAny]
