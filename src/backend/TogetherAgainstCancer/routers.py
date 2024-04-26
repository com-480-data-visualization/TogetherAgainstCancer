from rest_framework import routers

from tac.viewsets import CancerViewSet

router = routers.SimpleRouter()

router.register("tac", CancerViewSet, basename="tac")

urlpatterns = router.urls