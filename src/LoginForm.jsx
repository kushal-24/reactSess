import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
      className="bg-red-400" w-3 h-3
      {...register("email")} />
      <input 
      className="bg-blue-400" w-3 h-3
      {...register("password")} />
      <button>Login</button>
    </form>
  );
}

export default LoginForm;

/*
<input
  name="email"
  onChange={register(...).onChange}
  onBlur={register(...).onBlur}
  ref={register(...).ref}
/>
*/