<template>
    <DocPTViewer :docs="docs">
        <Menu :model="items" />
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            items: [
                {
                    label: 'Documents',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-plus'
                        },
                        {
                            label: 'Search',
                            icon: 'pi pi-search'
                        }
                    ]
                },
                {
                    separator: true
                },
                {
                    label: 'Profile',
                    items: [
                        {
                            label: 'Settings',
                            icon: 'pi pi-cog'
                        },
                        {
                            label: 'Logout',
                            icon: 'pi pi-sign-out'
                        }
                    ]
                }
            ],
            docs: [
                {
                    data: getPTOptions('Menu'),
                    key: 'Menu'
                }
            ]
        };
    }
};
</script>
