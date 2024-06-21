import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
// import { Tweet } from "@/gql/graphql";
import Link from "next/link";

// interface FeedCardProps {
//   data: Tweet;
// }

const FeedCard: React.FC = () => {
    //   const { data } = props;

    return (
        <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-1">
                    <Image src="https://avatars.githubusercontent.com/u/79667957?s=96&v=4" alt="user-image" height={50} width={50} className="rounded-full" />
                </div>


                <div className="col-span-11">
                    <h5>Akshat Negi</h5>
                    <p>
                        A user profile describes the characteristics of a person working in a particular job role.
                        For example, the characteristics of a compensation specialist would include a detailed
                        description of that person's attributes.
                    </p>
                    <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
                        <div >
                            <BiMessageRounded />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <AiOutlineHeart />
                        </div>
                        <div>
                            <BiUpload />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeedCard;