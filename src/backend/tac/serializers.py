from rest_framework import serializers

from .models import Cancer

class CancerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cancer
        fields = ["type", "id"]
        read_only_fields = ["id"]