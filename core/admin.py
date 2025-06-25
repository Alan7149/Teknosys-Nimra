from django.contrib import admin
from .models import Content, Team, Theme

@admin.register(Content)
class ContentAdmin(admin.ModelAdmin):
    list_display = ('page', 'section', 'created_at')  # ✅ field 'title' doesn't exist; replaced with 'page'
    search_fields = ('page', 'section')               # ✅ same here
    list_filter = ('section',)

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'created_at')  # ✅ good
    search_fields = ('name', 'role')
    list_filter = ('role',)

@admin.register(Theme)
class ThemeAdmin(admin.ModelAdmin):
    list_display = ('primary_color', 'secondary_color', 'font_family', 'created_at')  # ✅ actual fields
    search_fields = ('primary_color', 'secondary_color')
