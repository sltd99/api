#include <iostream>
#include <vector>
#include <map>
using std::cout;

struct Point {
    double x;
    double y;

    Point() {
        cout<<"Shit happens\n";
    }

    Point(double x, double y){
        this->x = x;
        this->y = y;
        cout<< "Constructed\n";
    }

    Point(const Point& other) {
        this->x = other.x;
        this->y = other.y;
        cout<<"Copied\n";
    }
};

int main() {
    //char b[2][2] = {{'1','2'},{'3','4'}};
    std::map<int,Point> m;
   // m[1] = Point(2,3);
    m.emplace(1,Point(1,1)); 
    cout<<m[1].x<<"\n-----------Sexy Performance BOOOOOST---------\n";

    m.emplace(std::piecewise_construct, std::make_tuple(1), std::make_tuple(1,1));
    cout<<m[1].x;

    //std::vector<Point> v(10);
    //cout<<v.capacity()<<'\n';
    //v.reserve(10);
    //for(int i = 0; i < 10; ++i) {
       // v.push_back(2,3); //invalid
        //v.push_back(Point(2,3)); 
        //v.emplace_back(Point(2,3));
   // }
    
    //cout<<v.capacity()<<'\n';
   // cout<<&v[0]<<'\n';
    //cout<<&v[1]<<'\n';
    //cout<<v[8].x;
    //

    srand(time(0));
    // 0 popyes 
    // 1 kfc
    // 2 burger king
    // 3 Mexico
    cout<<"----------------\n"<<rand()%4;

}

