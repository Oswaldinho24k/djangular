from django.conf.urls import url, include
from django.contrib import admin
from scrumboard import urls as scrumUrls
from django.views.generic import TemplateView
from auth_api import urls as auth_apiUrls
from django.views.decorators.csrf import ensure_csrf_cookie

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', ensure_csrf_cookie(TemplateView.as_view(template_name="home.html"))), 
    url(r'^scrumboard/',
    	include(scrumUrls)),
    url(r'^auth_api/', include(auth_apiUrls)), 


]
