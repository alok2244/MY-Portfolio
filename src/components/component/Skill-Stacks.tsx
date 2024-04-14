import { cn } from "../../lib/utils";
import { CardStack } from "./ui/card-stack";

export function SkillStack() {
    return (
        <div className="h-[35rem] flex items-center justify-center w-full">
            <CardStack items={CARDS} />
        </div>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(

                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};

const CARDS = [
    {
        id: 0,
        name: " ",
        designation: " ",
        content: (
            <>
                <p className="flex justify-center">
                    <Highlight> Programming Languages</Highlight>
                </p>
                <div className="py-8 flex justify-center ">

                    <ul className="space-y-2">
                        <li >Python</li>
                        <li>Java</li>
                        <li>C</li>
                        <li>.Net</li>
                        <li>C#</li>
                    </ul>
                </div>

            </>
        ),
    },
    {
        id: 1,
        name: " ",
        designation: " ",
        content: (
            <>
                <p className="flex justify-center">

                    <Highlight>Web Development</Highlight>
                </p>
                <div className="py-8 space-x-5 flex justify-center ">
                    <ul className="space-y-2">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>AJAX</li>
                        <li>React</li>
                    </ul>
                    <ul className="space-y-2">
                        <li>React Native</li>
                        <li>JavaScript (JS)</li>
                        <li>NextJS</li>
                        <li>Flask</li>
                    </ul>
                </div>
            </>
        ),
    },
    {
        id: 2,
        name: "  ",
        designation: " ",
        content: (
            <>
                <div className="flex justify-center">

                    <Highlight>Data Science and Machine Learning</Highlight>
                </div>
                <div className="py-8 flex justify-center ">
                    <ul className="space-y-2">
                        <li>Machine Learning</li>
                        <li>Natural Language Processing</li>
                        <li>Data Science</li>
                    </ul>
                </div>
            </>


        ),
    },
    {
        id: 3,
        name: "  ",
        designation: " ",
        content: (
            <>
                <p className="flex justify-center">

                    <Highlight>Database and Backend</Highlight>

                </p>
                <div className="py-8 flex justify-center ">
                    <ul className="space-y-2">
                        <li>SQL</li>
                        <li>SAP</li>
                        <li>Asp.NET</li>
                    </ul>
                </div>
            </>
        ),
    },
];


