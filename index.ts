interface Iarithmatic{
arithmatic(a,b);
}
export class Add implements Iarithmatic{
    public arithmatic(a,b){
        return a+b;
    }
}