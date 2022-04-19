import Image from "next/image"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout title="Contact">
        <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
            <div className="mt-4">
                <p className="font-bold">Contact info</p>
            </div>

            <div className="flex justify-center mt-4">
                <Image 
                    className="rounded-full"
                    src="/avatar.jpg"
                    width={60}
                    height={60}
                    alt="Avater"
                />
            </div>

            <div className="mt-4">
                <p className="font-bold">Address</p>
                <p className="text-xs mt-2 text-gray-600">cityA</p>
                <p className="font-bold mt-3">Email</p>
                <p className="text-xs mt-2 text-gray-600">sugimo.324@gmail.com</p>
                <p className="font-bold mt-3">phone</p>
                <p className="text-xs mt-2 text-gray-600">000-123-456</p>
            </div>
        </div>    
    </Layout>
    )
}

export default Contact