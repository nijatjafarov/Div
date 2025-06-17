print('XO oyununa xoş gəlmisiniz')
oyuncu1 = input('İlk oyunçunun adı: ')
oyuncu2 = input('İkinci oyunçunun adı: ')
xanalar = ['-', '-', '-', '-', '-', '-', '-', '-', '-']

oyun = f"{xanalar[0]} | {xanalar[1]} | {xanalar[2]}\n{xanalar[3]} | {xanalar[4]} | {xanalar[5]}\n{xanalar[6]} | {xanalar[7]} | {xanalar[8]}"
print(oyun)


while True:
    oyuncu1_gedisi = int(input(f'{oyuncu1}, zəhmət olmasa 1-9 arasında xana seçin: '))
    while oyuncu1_gedisi > 9 or oyuncu1_gedisi < 1 or xanalar[oyuncu1_gedisi-1] != '-':
            oyuncu1_gedisi = int(input(f'{oyuncu1}, zəhmət olmasa 1-9 arasında boş xana seçin: '))
    xanalar[oyuncu1_gedisi-1] = 'x'
    oyun = f"{xanalar[0]} | {xanalar[1]} | {xanalar[2]}\n{xanalar[3]} | {xanalar[4]} | {xanalar[5]}\n{xanalar[6]} | {xanalar[7]} | {xanalar[8]}"
    print(oyun)

    oyuncu2_gedisi = int(input(f'{oyuncu2}, zəhmət olmasa 1-9 arasında xana seçin: '))
    while oyuncu2_gedisi > 9 or oyuncu2_gedisi < 1 or xanalar[oyuncu2_gedisi-1] != '-':
            oyuncu2_gedisi = int(input(f'{oyuncu2}, zəhmət olmasa 1-9 arasında boş xana seçin: '))
    xanalar[oyuncu2_gedisi-1] = 'o'
    oyun = f"{xanalar[0]} | {xanalar[1]} | {xanalar[2]}\n{xanalar[3]} | {xanalar[4]} | {xanalar[5]}\n{xanalar[6]} | {xanalar[7]} | {xanalar[8]}"
    print(oyun)

    if xanalar[0] == xanalar[1] == xanalar[2] != '-':
        print(f'{xanalar[0]} qalib gəldi')
    elif xanalar[3] == xanalar[4] == xanalar[5] != '-':
        print(f'{xanalar[3]} qalib gəldi')
    elif xanalar[6] == xanalar[7] == xanalar[8] != '-':
        print(f'{xanalar[6]} qalib gəldi')
    elif xanalar[1] == xanalar[3] == xanalar[6] != '-':
        print(f'{xanalar[1]} qalib gəldi')
    elif xanalar[2] == xanalar[4] == xanalar[7] != '-':
        print(f'{xanalar[1]} qalib gəldi')
    elif xanalar[3] == xanalar[5] == xanalar[8] != '-':
        print(f'{xanalar[3]} qalib gəldi')
    elif xanalar[0] == xanalar[4] == xanalar[8] != '-':
        print(f'{xanalar[0]} qalib gəldi')
    elif xanalar[2] == xanalar[4] == xanalar[6] != '-':
        print(f'{xanalar[2]} qalib gəldi')