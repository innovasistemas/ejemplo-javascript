import json
import pandas as pd

with open('json/Cambios Monedas Agrupado.json', 'r') as file:
    data = json.load(file)


records = []

for currency, changes in data.items():
    for change in changes:
        change["currency"] = currency
        records.append(change)

df = pd.DataFrame(records)
df.info()
print(df.head)
print(df.tail)

df['Fecha'] = pd.to_datetime(df['Fecha'], dayfirst=True, errors='coerce')
df.info()

df.dropna(subset=['Fecha', 'Cambio'], inplace=True)
print(df.head())

df_currency = df.pivot_table(index='Fecha', columns='currency', values='Cambio')
df_currency.head()