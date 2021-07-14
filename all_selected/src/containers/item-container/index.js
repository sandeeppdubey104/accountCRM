import React from "react";
import RoutingUtil from '../../../src/utils/RoutingUtil';
import CrudLayoutContainer from '../../../src/components/crud-layout-component/CrudLayoutContainer';
import { itemEditAction, itemSearchAction } from './actions/ItemActions';
import SearchContainer from '../search-container/SearchContainer';
import ItemForm from './ItemForm';

const tabs = [
    {
        title: 'Manage',
        link: RoutingUtil.productManagerUrl(),
    },
    {
        title: 'Search',
        link: RoutingUtil.productSearch(),
    },
];
const routes = [
    {
        link: RoutingUtil.productManagerUrl(),
        component: ItemForm,
    },
    {
        link: RoutingUtil.productSearch(),
        component: () => (
            <SearchContainer
                reducer="ItemReducer"
                dataPath="search"
                editAction={itemEditAction}
                redirectUrlOnEdit={RoutingUtil.productManagerUrl()}
                action={itemSearchAction}
                hasEdit
                columns={{
                    categoryType: {
                        display: 'ITEM CATEGORY',
                    },
                    groupCategory: {
                        display: "GROUP CATEGORY",
                        path: "groupCategory.groupCategory"
                    },
                    itemName: {
                        display: 'NAME',
                    },
                    price: {
                        display: 'PRICE',
                    },
                    uom: {
                        display: 'UNIT',
                        path: 'uom.uomName',
                    },
                    hsnCode: {
                        display: 'HSN CODE',
                    },
                    gstRate: {
                        display: 'GST RATE',
                    },
                    description: {
                        display: 'DESCRIPTION',
                    },
                    by: {
                        display: 'CREATED BY',
                        path: "by.firstName",
                    },
                    active: {
                        display: 'STATUS',
                    },
                    action: {
                        display: 'ACTION',
                    }
                }}
            />
        ),
    },
    // {
    //     link: RoutingUtil.productPricingUrl(),
    //     component: PricingForm,
    // },
];

const ItemContainer = () => (
    <CrudLayoutContainer
        title="Items Manager"
        tabs={tabs}
        routes={routes}
    />
    // <h1> hello </h1>

);


ItemContainer.propTypes = {

};
//export default Tables;
export default ItemContainer;
