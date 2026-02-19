import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Collection } from "@/components/shared/Collection";
import Header from "@/components/shared/Header";
import { getUserImages } from "@/lib/actions/image.actions";
import { getUserById } from "@/lib/actions/user.actions";
import AnimatedWavesBackground from '@/components/shared/AnimatedWavesBackground';

const Profile = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  // TEMPORARY: Create a mock user object to bypass database requirement
  let user;
  try {
    user = await getUserById(userId);
  } catch (error) {
    // If user not found in database, create a mock user for testing
    console.log('User not found in database, using mock user for testing');
    user = {
      _id: '507f1f77bcf86cd799439011', // Use a valid MongoDB ObjectId format
      clerkId: userId, // Store the actual Clerk user ID
      creditBalance: 10, // Give 10 credits for testing
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com'
    };
  }

  // TEMPORARY: Use empty images array if database is not available
  let images;
  try {
    images = await getUserImages({ page, userId: user._id });
  } catch (error) {
    console.log('Could not fetch images, using empty array for testing');
    images = { data: [], totalPages: 0 };
  }

  return (
    <>
      <AnimatedWavesBackground />
      <div className="relative z-10 animate-fadeInUp">
        <Header
          title="Profile"
          subtitle="Your creative dashboard"
          titleClassName="bg-gradient-to-r from-[#43e97b] via-[#a18cd1] to-[#624cf5] bg-clip-text text-transparent font-bold"
          subtitleClassName="text-[#624cf5] font-semibold"
        />
        <section className="mt-8 flex flex-col gap-8 items-center">
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 animate-fadeInUp">
            {/* ...profile/statistics/cards content... */}
          </div>
        </section>
        {/* Collection Section */}
        <section className="mt-8 flex flex-col gap-8 items-center animate-fadeInUp">
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8">
            <Collection
              images={images?.data}
              totalPages={images?.totalPages}
              page={page}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;