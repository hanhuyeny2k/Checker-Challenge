<img src="https://github.com/hanhuyeny2k/HippoSpammer/blob/img-and-readme-change/images/README_header_update.png" width="auto    " height=auto />

# Checker Challenge: HippoSpammer
## Description
Receive an email when the checker comes out for requested project  
Simply enter your Holberton email, password, [API key](https://intranet.hbtn.io/dashboards/my_tools), and desired project ID to receive an email when the checker becomes available for the project. (Project IDs can be found at the end of the URL for the project!) Click submit and sit back while you wait for the alert from HippoSpammer.  

<img src="https://github.com/hanhuyeny2k/HippoSpammer/blob/img-and-readme-change/images/Info_fill_out.png" />

## Demonstration

### Instruction
1) Request an auth_token to access Holberton's API.
Example:
```
$ curl -XPOST https://intranet.hbtn.io/users/auth_token.json -H "Content-Type: application/json" -d '{"api_key": "1234567890", "email": "guillaume@holbertonschool.com", "password": "HolbertonForever", "scope": "checker"}'
{
    "user_id": 1,
    "full_name": "Guillaume Salva",
    "auth_token": "0123456789abcdef",
    "expiration_date": "11/11/2019 10:49:00"
}
$
```
2) Get the profile using auth_token.
Example:
```
$ curl -XGET https://intranet.hbtn.io/users/me.json?auth_token=0123456789abcdef -H "Content-Type: application/json"
{
    "id": 1,
    "email": "guillaume@holbertonschool.com",
    "full_name": "Guillaume Salva",
    "first_name": "Guillaume",
    "last_name": "Salva",
    "linkedin_url": "https://www.linkedin.com/in/guillaume-salva-35320314/",
    "twitter_username": "guillaumesalva",
    "github_username":"papamuziko",
    "profile_pic":"https://..."
}
$
```
3) Get a project information
Example:
```
$ curl -XGET https://intranet.hbtn.io/projects/434.json?auth_token=0123456789abcdef -H "Content-Type: application/json"
{
    "id": 434,
    "name": "Hack day: Checker challenge!",
    "track_id": 6,
    "created_at": "2018-04-24T01:29:24.000Z",
    "updated_at": "2019-10-02T21:01:17.000Z",
    "tasks": [
        {
            "id": 3433,
            "title": "Evaluation",
            "position": 1,
            "checker_available": false,
            "github_repo": "",
            "github_dir": "",
            "github_file": ""
        }
    ]
}
$
```
4) Get a task information
Example:
```
$ curl -XGET https://intranet.hbtn.io/tasks/1007.json?auth_token=0123456789abcdef -H "Content-Type: application/json"
{
    "id": 1007,
    "title": "Run Python file",
    "github_repo": "holbertonschool-higher_level_programming",
    "github_dir": "0x00-python-hello_world",
    "github_file": "0-run",
    "position": 1,
    "project_id": 231,
    "created_at": "2018-05-08T04:25:53.000Z",
    "updated_at": "2019-09-30T04:34:50.000Z",
    "checker_available":true
}
$
```
### Installation
`$ npm install request`  
`$ npm install nodemailer`

**Note for nodemailer using Gmail:**  
Emails automatically go to the receiver's spambox when intially sent out. Be sure to remind them to mark your email as safe so that it will automatically head to inbox the next time they are emailed. For more information, you can read more [here](https://nodemailer.com/usage/using-gmail/) :slight_smile:

### Testing
(request)  
<img src="https://github.com/hanhuyeny2k/HippoSpammer/blob/master/images/When%20checker%20is%20not%20available.png" />

<img src="https://github.com/hanhuyeny2k/HippoSpammer/blob/master/images/When%20checker%20is%20available.png" />

(nodemailer)  
<img src="https://github.com/hanhuyeny2k/HippoSpammer/blob/img-and-readme-change/images/nodemailer.png" />

## Authors
* [Jessica Bathel](https://github.com/jbathel)
* [Joan Cruz](https://github.com/joancruzz)
* [Edward Guillermo](https://github.com/guilmeister)
* [Yashar Mateen](https://github.com/yasheymateen)
* [Brent Muha](https://github.com/bmuha1)
* [Hanh Nguyen](https://github.com/hanhuyeny2k)
* [Aalaa Satti](https://github.com/alaksatti)
* [Alia Vang](https://github.com/aliavang)
