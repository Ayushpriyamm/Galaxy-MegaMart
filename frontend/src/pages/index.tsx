import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";



export default function IndexPage() {
  
 
  

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Galaxy&nbsp;</span>
          <span className={title({ color: "green" })}>MegaMart&nbsp;</span>
          <br />
          <span className={title()}>
            
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            
          </div>
        </div>

        <div className="flex gap-3">
          <Link
           
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href='/login'
          >
            Login
          </Link>
          <Link
           
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href='/login'
          >
              
            Signup
          </Link>
          
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get your Groceries Now
              
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}
