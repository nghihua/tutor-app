cd vào đây rồi gõ npm start để chạy server nha, default port chị để là 5000, muốn đổi thì vào app.js đổi

# API ENDPOINTS

## Authentication

[POST] /api/auth/signup ({ email, password, full_name, major, intake, is_volunteer }) //sua lai is_volunteer default

	--> if email is invalid, return a 400 code error with message "Invalid email"
	
	--> if email already exists, return a 400 code error with message "Email already exists"
	
	--> if there are other errors, return the error
	
	--> otherwise, return "Create new user successfully!" and store jwt in cookie
	
[POST] /api/auth/login ({ email, password })

	--> if email doesn't exist, return a 400 code error with message "Email doesn't exist"
	
	--> if password is incorrect, return a 400 code error with message "Incorrect password"
	
	--> if there are other errors, return the error
	
	--> otherwise, return "Log in succesfully!" and store jwt in cookie
	
[GET] /api/auth/logout

	--> remove jwt from cookie and return "successfully log out!"
	
## User

[GET] /api/user/current

	--> if user is not logged in (no jwt in cookie or jwt is invalid), return false
	
	--> if user is logged in but cannot find user_id in database, return false
	
	--> otherwise, return an object with current user's data
	
[GET] /api/user/:id

	--> if user is not logged in (no jwt in cookie or jwt is invalid), return a 401 error code with message "Unauthorized!"
	
	--> if user is logged in but cannot find user_id in database, return a 401 error code with message "Unauthorized!"
	
	--> if cannot find user_id in database, return false
	
	--> otherwise, return an object with that user's data
	
[PUT] /api/user/:id/edit ({ full_name, major, intake, is_volunteer, subject })

	--> if user is not logged in (no jwt in cookie or jwt is invalid), return a 401 error code with message "Unauthorized!"
	
	--> if current user is not the owner of this profile, return a 401 error code with message "Unauthorized!"
	
	--> if new data is invalid (wrong type, etc), return the error
	
	--> otherwise, return "update successfully!"
	
[GET] /api/user/tutors

	--> if user is not logged in (no jwt in cookie or jwt is invalid), return a 401 error code with message "Unauthorized!"
	
	--> if user is logged in but cannot find user_id in database, return a 401 error code with message "Unauthorized!"
	
	--> otherwise, return an array of tutor objects


