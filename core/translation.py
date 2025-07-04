from modeltranslation.translator import register, TranslationOptions
from .models import Content

@register(Content)
class ContentTranslationOptions(TranslationOptions):
    fields = ('content',)  # Add any other fields you want to translate
