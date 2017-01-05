# out: ./here.js

sum = (v) -> _.reduce v, ((a,b) -> a+b), 0
sum [1..10]
