import { Button, Form, Input } from "@heroui/react"
import { useSelector } from "react-redux";


const PersonalInfo = () => {
  const { currentUser } = useSelector((state: any) => state.user)
  const onSubmit = (e: any) => {
    e.preventDefault();
  }
  return (
    <div className="w-3/4 px-4 space-y-4">
      <h1 className="text-4xl">Personal Information</h1>
      <Form onSubmit={onSubmit} >
        <Input

          errorMessage="Please enter a valid username"
          label="userName"
          labelPlacement="outside"
          name="userName"
          placeholder="Enter your userName"
          type="text"
          value={currentUser.userName}
        />
        <Input

          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
          value={currentUser.email}
        />

        <Input
          errorMessage="Please enter a Phone number"
          label="Phone"
          labelPlacement="outside"
          name="phone"
          placeholder="Enter your Phone"
          type="tel" // Better for mobile & formatting
          value={currentUser.phoneNumber}
          // onValueChange={setPhoneNumber}
          
          className="w-full"
          inputMode="numeric"
          pattern="[0-9]*"
          onKeyDown={(e) => {
            // Prevent non-numeric characters
            const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];
            if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
              e.preventDefault();
            }
          }}
        />

        <Button type="submit" variant="bordered" className='hover:bg-green-600'>
          Update
        </Button>

      </Form>
    </div>
  )
}

export default PersonalInfo