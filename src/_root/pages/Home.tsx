/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/32XcAv7w7Od
 */

import { Link } from "react-router-dom"
import CareerGraph from "../../components/component/CareerGraph"
import { motion } from "framer-motion";
import { LampContainer } from "../../components/component/lamp"
import { Experience } from "../../components/component/experience"
import { Project } from "../../components/component/project"
import MovingText from "../../components/component/ui/movint-text"
import { SkillStack } from "../../components/component/Skill-Stacks"
//@ts-ignore
import backgroundImage from '../../../public/asset/me.jpg';
import { Certificate } from "../../components/component/certificate"
import ContactUs from "../../components/component/contact"



const Home = () => {

  return (
    <div className="flex flex-col  min-h-[100dvh]">

      <main className="flex-1 relative h-full">
        <LampContainer className=" flex justify-center items-center lg:pt-10 border-[1px] border-red-800  md:pt-20">
          <section className="w-full sm:top-72  md:pt-80 lg:pt-72 ">
            <motion.div
              initial={{ opacity: 0.2, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <div className="container  flex flex-col lg:flex-row justify-evenly">
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                      Welcome to my Portfolio
                    </div>
                    <h1 className="text-3xl font-bold pt-10 tracking-tighter sm:text-5xl text-white xl:text-6xl/none">Hi, I'm Alok Chauhan</h1>
                    <p className=" max-w-[600px] text-white md:text-xl/relaxed pt-5 lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      I'm a passionate developer who loves creating amazing web experiences. Welcome to my corner of the
                      internet and also i am a highly skilled computer science professional with a passion for problem-solving and creating
                      innovative solutions.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pt-11 min-[400px]:ml-auto">
                    <img
                      alt="Image"
                      className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center border-4 border-gray-50 dark:border-gray-950"
                      height="300"
                      src={backgroundImage}
                      width="300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </LampContainer>

        <section className="w-full flex justify-center py-8 md:py-16 lg:py-24 xl:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">My Experience</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl dark:text-gray-400">
                Here's a timeline of my career so far. I've had the opportunity to work with some amazing teams and contribute to some exciting projects.
              </p>
              <div className="w-full flex justify-center text-2xl md:text-3xl lg:text-4xl">
                <Experience />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center py-12 md:py-24 lg:pt-20 lg:pb-40 xl:pb-60">
          <div className="container">
            <CareerGraph />
          </div>
        </section>


        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 md:gap-10 lg:grid-cols-2 lg:gap-16">

              <div className="flex justify-center">
                <div className="inline-block justify-center rounded-lg bg-gray-100 px-3 w-full max-w-xl text-sm dark:bg-gray-800">
                  <p className="text-4xl flex justify-center font-bold font-mono pt-10">
                    Skills
                  </p>
                  <div>
                    <SkillStack />
                  </div>
                </div>
              </div>
              <MovingText />

            </div>
          </div>
        </section>

        <section className="w-full justify-center flex py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Projects</h2>
              <p className="max-w-xl md:max-w-2xl lg:max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some of the projects I've worked on. Click on a project to learn more.
              </p>
            </div>
            <div>
              <Project />
            </div>
          </div>
        </section>

        <section>
        <div className="sm:space-y-4 px-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Certificates</h2>
          </div>
          <div className="sm:py-20 md:py-10 lg:py-2">

          <Certificate />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 justify-center flex border-t">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Me</h2>
              <p className="mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a question or want to work together? Send me a message using the form below.
              </p>
            </div>
            {/* <div className="mx-auto w-full max-w-xl md:max-w-2xl lg:max-w-3xl space-y-2">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" required type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" required />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div> */}
            <ContactUs />
          </div>
        </section>

      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

//@ts-ignore
function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

export default Home