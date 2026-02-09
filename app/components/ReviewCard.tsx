interface ReviewCardProps {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export default function ReviewCard({
  name,
  role,
  quote,
  avatar,
}: ReviewCardProps) {
  return (
    <div className="rounded-3xl body-text bg-[#f7f7f7] p-6">
      {/* Header */}
      <div className="mb-4 flex  items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
          {avatar && (
            <img
              src={avatar}
              alt={name}
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed text-gray-700">“{quote}”</p>
    </div>
  );
}
