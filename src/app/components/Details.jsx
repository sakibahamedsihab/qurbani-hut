import Image from "next/image";
import { Tag, Calendar, Weight, MapPin, HeartPulse } from "lucide-react";

export default function Details({ cow }) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-xl rounded-2xl p-6">
        {/* Image Section */}
        <div className="relative w-full h-[400px]">
          <Image
            src={cow.image}
            alt={cow.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{cow.name}</h1>

          <p className="text-gray-600">{cow.description}</p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <Tag size={18} />
              <span>{cow.breed}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{cow.age} years</span>
            </div>

            <div className="flex items-center gap-2">
              <Weight size={18} />
              <span>{cow.weight} kg</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{cow.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <HeartPulse size={18} />
              <span>{cow.health}</span>
            </div>

            <div className="flex items-center gap-2">
              <Tag size={18} />
              <span>{cow.category}</span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-green-600">
              ৳ {cow.price.toLocaleString()}
            </h2>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Contact Seller
            </button>

            <button className="border px-6 py-2 rounded-lg hover:bg-gray-100 transition">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
