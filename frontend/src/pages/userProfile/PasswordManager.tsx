import { Button } from "@heroui/button"
import { Input } from "@heroui/input"
import { Form } from "@heroui/react"
// import { useSelector } from "react-redux"
import { EyeSlashFilledIcon, EyeFilledIcon } from "@/components/appComponents/LoginFrom"
import { useState } from "react"
import { Link } from "react-router-dom"



const PasswordManager = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  // const { currentUser } = useSelector((state: any) => state.user)
  const onSubmit = (e: any) => {
    e.preventDefault();
  }
  return (
    <div className="w-3/4 px-4 space-y-4">
      <h1 className="text-4xl">Password Manager</h1>
      <Form onSubmit={onSubmit} >
        <div className="w-full">
          <Input
            className="w-full"
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-hidden"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            label="Password"
            isRequired
            labelPlacement="outside"
            placeholder="Enter your old password"
            value={""}
            type={isVisible ? "text" : "password"}
            
          // onValueChange={setPassword}

          />
          <Link to={"#"} className=" flex justify-end underline">
            forgot Password
          </Link>
        </div>

        <Input
          className="w-full"
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-hidden"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          label="New Password"
          isRequired
          labelPlacement="outside"
          placeholder="Enter your New password"
          value={""}
          type={isVisible ? "text" : "password"}
          
        // onValueChange={setPassword}

        />

        <Input
          className="w-full"  
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-hidden"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          label="Confirm Password"
          isRequired
          labelPlacement="outside"
          placeholder="Confirm  password"
          value={""}
          type={isVisible ? "text" : "password"}
          
        // onValueChange={setPassword}

        />



        <Button type="submit" variant="bordered" className='hover:bg-green-600'>
          Update Password
        </Button>

      </Form>
    </div>
  )
}

export default PasswordManager