const menu = [
    {'name':'About US','url':'/about-us'},
]
const saveForLater = [
    {'name':'Cars for rent','children':[
        {'name':'Afficher tous les voiturs','url':'/all'},
        {'name': 'Lux','url':'/lux'},
        {'name': 'Moyenne de gamme','url':'/lux'},
        {'name': 'Bas gamme','url':'/lux'},
    ]},
    {'name':'Car brands','children':[
        {'name':'Audi','url':'/audi'},
        {'name':'Mercdes Benz','url':'/merceds'},
        {'name':'Bmw','url':'/bmw'}
    ]}
]

export default menu;