from django import forms
from .models import Account
    
class AccountForm(forms.ModelForm):
    class Meta:
        model = Account
        fields =  ['username', 'email', 'password'] # '__all__'
        # exclude = ['password']
