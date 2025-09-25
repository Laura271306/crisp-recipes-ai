interface TestimonialCardProps {
  name: string;
  title: string;
  content: string;
  rating?: number;
}

export const TestimonialCard = ({ name, title, content, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="p-6 rounded-lg border border-border bg-card shadow-[var(--shadow-card)]">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-warning text-lg">★</span>
        ))}
      </div>
      <p className="text-foreground mb-4 italic">"{content}"</p>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-muted-foreground text-sm">{title}</p>
      </div>
    </div>
  );
};