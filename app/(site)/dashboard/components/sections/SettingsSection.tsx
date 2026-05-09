type Props = {
  user: any;
};

export default function SettingsSection({ user }: Props) {
  return (
    <div className="flex-1">
      <h1 className="text-5xl font-bold tracking-tight mb-8">Settings</h1>

      <div className="rounded-3xl bg-white p-10">
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500">Name</p>

            <h2 className="text-2xl font-bold mt-2">{user.name}</h2>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>

            <h2 className="text-2xl font-bold mt-2">{user.email}</h2>
          </div>

          <div>
            <p className="text-sm text-gray-500">Role</p>

            <h2 className="text-2xl font-bold mt-2">{user.role}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
