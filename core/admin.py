from django.contrib import admin
from .models import Content, Team, Theme

# Register Content model with inline editing for sections
class ContentAdmin(admin.ModelAdmin):
    list_display = ('page', 'section', 'updated_at')
    list_filter = ('page', 'section')
    search_fields = ('content',)

# Register Team model
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'contact', 'updated_at')
    search_fields = ('name', 'role', 'contact')

# Register Theme model (single instance)
class ThemeAdmin(admin.ModelAdmin):
    list_display = ('primary_color', 'secondary_color', 'font_family', 'updated_at')

# Register models
admin.site.register(Content, ContentAdmin)
admin.site.register(Team, TeamAdmin)
admin.site.register(Theme, ThemeAdmin)