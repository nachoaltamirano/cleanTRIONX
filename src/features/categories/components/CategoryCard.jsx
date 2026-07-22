import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';

const CategoryCard = ({ category }) => {
  return (
    <Card className="p-6">
      <div className="flex flex-col gap-4">
        {category?.image ? (
          <img src={category.image} alt={category?.name ?? 'Categoría'} className="h-40 w-full rounded-xl object-cover" />
        ) : null}

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">{category?.name ?? 'Categoría'}</h3>
          {category?.description ? <p className="text-sm text-gray-600">{category.description}</p> : null}
        </div>

        <Link to={`/products?category=${category?.id ?? ''}`}>
          <Button variant="primary">Ver productos</Button>
        </Link>
      </div>
    </Card>
  );
};

export default CategoryCard;
