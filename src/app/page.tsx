import Link from "next/link";


const mockUrls = [
  "https://1wl0fclwg5.ufs.sh/f/DFrWgeEqteSvxhTl7ejXl9B42omgatHhWfc8IRQ3KVGpu5ve",
  "https://1wl0fclwg5.ufs.sh/f/DFrWgeEqteSvnJGsfeHWIxk9MKDAlf28LmRuiz4qU5t7CwZc",
  "https://1wl0fclwg5.ufs.sh/f/DFrWgeEqteSvwLtr8WUeg9L1ivOT372CPqojhzxybdlSJ6VG",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}  
      </div>
    </main>
  );
}
