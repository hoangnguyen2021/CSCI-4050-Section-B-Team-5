from .models import Card
from accounts.models import UserAccount



def save_card(cardnum , cvv, expiration_year , zip_code , User):
    User = UserAccount.objects.get(id = User)
    cards = Card.objects.filter(UserAccount = User)
    if( cards.__len__() < 3):
        card = Card(cardnum=cardnum , cvv = cvv , expiration_year = expiration_year , zip_code = zip_code, UserAccount = User)
        card.save()
        return True
    return False