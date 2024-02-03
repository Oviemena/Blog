from django import forms

class CommentForm(forms.Form):
    author = forms.CharField(
        max_length=60,
        widget=forms.TextInput(
            attrs={"class": " form-control rounded shadow text-gray-700 w-full", "placeholder": "Write your name..."}
        ),
    )
    body = forms.CharField(
        widget=forms.Textarea(
            attrs={"class": " form-control w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400", "placeholder": "Write a comment..."}
        )
    )