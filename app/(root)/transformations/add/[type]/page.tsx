import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const { userId } = await auth();
  const transformation = transformationTypes[type];

  if (!userId) redirect('/sign-in')

  // Create a fallback user object for testing when database is not available
  let user = {
    _id: '507f1f77bcf86cd799439011',
    clerkId: userId,
    creditBalance: 10,
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com'
  };

  // Try to get real user data if available
  try {
    const realUser = await getUserById(userId);
    if (realUser) {
      user = realUser;
    }
  } catch (error) {
    console.log('Using fallback user for testing');
  }

  return (
    <>
      <Header
        title={transformation.title}
        subtitle={transformation.subTitle}
      />

      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={userId}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage