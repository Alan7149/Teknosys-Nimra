from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
import logging

logger = logging.getLogger(__name__)

@receiver(post_save)
def log_save(sender, instance, created, **kwargs):
    if sender.__module__.startswith('core'):
        action = 'Created' if created else 'Updated'
        logger.info(f"{action}: {sender.__name__} - ID {instance.pk}")

@receiver(post_delete)
def log_delete(sender, instance, **kwargs):
    if sender.__module__.startswith('core'):
        logger.info(f"Deleted: {sender.__name__} - ID {instance.pk}")
