export default function RootLayout({
    children,

}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="w-full">2nd layout</div>
            {children}
        </div>
    );
}