#include <algorithm>
#include <iostream>
#include <numeric>
#include <string>
#include <vector>
using namespace std;

struct Snitch { // Note: All methods have side effects
    Snitch()
    {
        cout << "c'tor" << endl;
    }
    ~Snitch() { cout << "d'tor" << endl; }

    Snitch(const Snitch&)
    {
        cout << "copy c'tor" << endl;
    }
    Snitch(Snitch&&)
    {
        cout << "move c'tor" << endl;
    }

    Snitch& operator=(const Snitch&)
    {
        cout << "copy assignment" << endl;
        return *this;
    }

    Snitch& operator=(Snitch&&)
    {
        cout << "move assignment" << endl;
        return *this;
    }
};

Snitch CreateSnitch()
{
    return Snitch();
}

int test(int i, string j, double k)
{
    string kk = to_string(i) + to_string(k) + j;
    return 0;
}

int main()
{
    //Snitch s = CreateSnitch();
    vector<int> v;
    string s("123");
    s.append("1");
    v.push_back(1);
    v.push_back(1);
    //s = CreateSnitch();
}
