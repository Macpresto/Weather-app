class User{
    constructor(username, email){
        // setup properties
        this.username = username;
        this.email = username;
        this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}


class Admin extends User{
    deleteUser(){
        users = user.filter((u) =>{
            return u.username !== user.username;
        });
    }
}


const userOne = new User("luigi", 'luigi@yahoo.com');
const userTwo = new User("mario", 'mario@gmail.com');
const userThree = new Admin("yoshi", 'yoshi@yahoo.com');

let users = [userOne, userTwo, userThree];