<img src="https://github.com/hanhuyeny2k/HippoSpammer/blob/master/images/readmeHeader.jpg" width="auto    " height=auto />

# Checker Challenge: HippoSpammer
## Description
Receive text message when the checker comes out

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

### Testing
<img src="https://github.com/hanhuyeny2k/HippoSpammer/blob/master/images/When%20checker%20is%20not%20available.png" />

<img src="https://github.com/hanhuyeny2k/HippoSpammer/blob/master/images/When%20checker%20is%20available.png" />

## Authors
* [Jessica Bathel](https://github.com/jbathel)
* [Joan Cruz](https://github.com/joancruzz)
* [Edward Guillermo](https://github.com/guilmeister)
* [Yashar Mateen](https://github.com/yasheymateen)
* [Brent Muha](https://github.com/bmuha1)
* [Hanh Nguyen](https://github.com/hanhuyeny2k)
* [Aalaa Satti](https://github.com/alaksatti)
* [Alia Vang](https://github.com/aliavang)
