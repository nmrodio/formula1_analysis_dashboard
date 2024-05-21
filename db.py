from sqlalchemy import create_engine
import pandas as pd

engine=create_engine('postgresql://postgres:postgres@localhost:5432/formula1')
conn=engine.connect()

# Reading first csv file for drivers
drivers_df=pd.read_csv('Resources/output_data_for_tables/drivers.csv')
# creates schema and inserts records
drivers_df.to_sql('drivers', if_exists='replace', con=conn)

# Reading second csv file for cars
constructors_df=pd.read_csv('Resources/output_data_for_tables/constructors.csv')
# creates schema and inserts records
constructors_df.to_sql('cars', if_exists='replace', con=conn)

# Reading second csv file for career_wins
wins_df=pd.read_csv('Resources/output_data_for_tables/career_wins.csv')
# creates schema and inserts records
wins_df.to_sql('career_wins', if_exists='replace', con=conn)

# Reading second csv file for car_speeds
car_dropdown_df=pd.read_csv('Resources/output_data_for_tables/car_dropdown.csv')
# creates schema and inserts records
car_dropdown_df.to_sql('car_speeds', if_exists='replace', con=conn)

conn.close()