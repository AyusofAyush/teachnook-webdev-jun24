# Introduction to Database


## What is Data ?
```
Data is a collection of a distinct small unit of information. It can be used in a variety of forms like text, numbers, media, bytes, etc. it can be stored in pieces of paper or electronic memory, etc.

places where we store data HDD, SSD, RAM.... 

```

## Evolution of Database
```
1. File based
2. Hierarchical Data
3. Network Model
4. Relational Database (1970) - Reliable 
5. Cloud Database

    - AWS
    - Snowflake
    - Oracle cloud services
    - Microsoft SQL server
    - Google cloud 

```



## What is Database ?
```
A database is an organized collection of data, so that it can be easily accessed and managed.

Databases available like MySQL, Oracle, MongoDB, PostgreSQL, SQL Server, etc.

The main purpose of the database is to operate a large amount of information by storing, retrieving, and managing data.
```

## RDBMS
```
RDBMS stands for Relational Database Management System.

All modern database management systems like SQL, MS SQL Server, IBM DB2, ORACLE, My-SQL, and Microsoft Access are based on RDBMS.

How can we represent data in RDBMS ?

1. Table 

    row -> set of collection data 
    column -> field / attribute 

    | EMP ID |  NAME  | POSITION | SALARY |
        1        A       L1         1000
        2        B       L3         5000
        ....
        ....

    Degree -> The total number of attributes that comprise a relation is known as the degree of the table.
    eg. above table is of degree 4 

    Cardinality ->  total number of tuples at any one time in a relation is known as the table's cardinality.
        eg. above table has 4 rows so cardinality is 4

    Domain -> values of each attributes

    NULL Values - NULL -> nothing 

```

## Difference between SQL & NoSQL DB
```
    SQL                    

1. RDBMS                
2. Schema is static or predefined schema              
3. Databases are not suited for hierarchical data storage
4. These databases are best suited for complex queries or joined or inter related data
5. Vertically Scalable
6. Follows ACID (Atomicity Consistency Integrity Durability) property
7. Examples: MySQL, Postgres, Oracle, MS-SQL etc..


    NoSQL

1. Non-relational or distributed database system
2. They have a dynamic schema
3. These databases are best suited for hierarchical data storage
4. These databases are not suitable for complex queries or joined or inter related data
5. Horizontally Scalable
6. Follow CAP (Consistency Availability Pratition Tolerace)
7. Examples: MongoDB, Cassandra, CouchDB etc.

```


## SQL Database
```
SQL is a standard language for storing, manipulating and retrieving data in databases.

SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.

next class

```


## NoSQL Database 
```
    next class
```


