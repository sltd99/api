tree0 test

using java

```java
while(st < ed)

{

    int mid= st  + (ed-st)/2;

    if( r[mid] < target)

        st = mid+1;

    else

        ed = mid;

}

return st;
```
