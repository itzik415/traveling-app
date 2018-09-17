# traveling-app

## Overview:
The Isra-App is a travel guide for tourists wanting to visit Israel. The app provides users with trip options and reviews from previous customers. The app serves ass an advertisement for a pretend travel company.

#### Watch demo:
<a href="https://www.youtube.com/watch?v=YhcJyAnwu-Q&feature=youtu.be" target="_blank">
  ![](images/photo-1-1.png.png)
</a>

#### Screenshots:
![](https://raw.githubusercontent.com/itzik415/traveling-app/master/path/to/img.png)



## Team Members & Roles:
* [Itzik Shaoulian](https://github.com/itzik415) "The soul of the team, obviously"
* [Aaron Gross](https://github.com/ponchieponcho) "Bruce Willis of the team"
* [Illia Chaban](https://github.com/illiaChaban) "Had to be motivated by the app to finish the app"


## Technologies used:
 * React 
 * PostgreSQL 
 * Redux
 * Express.js 
 * JavaScript
 * Node.js
 * CSS
 * Amazon EC2.


## Code snippets:

```javascript
router.post('/getMyFriends', async (req,res) => {
    let userId = await readBody(req).then( req => JSON.parse(req))
    db.query(`
        SELECT friends.friendsarray
        FROM friends
        WHERE friends.userid = '${userId}';
    `)
    .then(data => JSON.parse(data[0].friendsarray))
    .then(async (array) => {

        let query = '';
        array.forEach( (friendId, i) => {
            query += `users.userid = '${friendId}' `;
            if ( i !== array.length - 1) query += 'OR ';
        })
    
        let feed = await db.query(`
            SELECT users.username,
            users.avatar, users.userid
            FROM users
                WHERE ${query};
        `)
        
        res.end(JSON.stringify(feed));
    })

})


router.post('/getUser', async (req, res) => {
    let userId = await readBody(req).then( req => JSON.parse(req));
    db.one(`
        SELECT avatar, username, userid
        FROM users
        WHERE userid = '${userId}';
    `)
    .then(user => {
        res.end(JSON.stringify(user))
    })
})

  
router.post('/postCheckin', async (req, res) => {
    let checkin = await readBody(req).then( req => JSON.parse(req));
    let {goalid, image, description} = checkin;
    db.query(`
        INSERT INTO checkins VALUES(
            '${goalid}',
            '${image}',
            '${description}',
            '${new Date().toISOString()}'
        );
    `)
    .then( () => res.end())
    .catch(error => {
        console.log(error); 
    });

})

```
