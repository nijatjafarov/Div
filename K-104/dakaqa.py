import random

sechimler = ['✊', '✋', '✌️']

print('Daş, kağız və qayçı oyununa xoş gəlmisiniz!')

istifadechinin_sechimi = None
while istifadechinin_sechimi not in sechimler:
    istifadechinin_sechimi = input('Daş, kağız və ya qayçıdan birini emoji kimi seçin (✊, ✋, ✌️): ')

komputerin_sechimi = random.choice(sechimler)

print(f'Kompüterin seçimi: {komputerin_sechimi} | İstifadəçinin seçimi: {istifadechinin_sechimi}')    
if komputerin_sechimi == istifadechinin_sechimi:
    print('Bərabərə')
else:
    if komputerin_sechimi == '✊':
        if istifadechinin_sechimi == '✌️':
            print('Kompüter qazandı')
        elif istifadechinin_sechimi == '✋':
            print('İstifadəçi qazandı')
    elif komputerin_sechimi == '✌️':
        if istifadechinin_sechimi == '✋':
            print('Kompüter qazandı')
        elif istifadechinin_sechimi == '✊':
            print('İstifadəçi qazandı')
    if komputerin_sechimi == '✋':
        if istifadechinin_sechimi == '✊':
            print('Kompüter qazandı')
        elif istifadechinin_sechimi == '✌️':
            print('İstifadəçi qazandı')
        